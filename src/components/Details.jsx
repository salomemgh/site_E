import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useParams, useNavigate } from "react-router-dom" ;
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Navbar from "./Navbar";

function Details() {

    const {id} = useParams ();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [comment, setComment] = useState("");
    const [editmode, setEditmode] = useState(false);
    const [editContent, setEditContent] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [commentContent, setCommentContent] = useState([]);



    useEffect(() =>{
        axios.get(`https://apitest.reachstar.io/blog/get/${id}`).then(function(response){
            setData(response.data)
            console.log(response);
        }).catch(function(error){
            console.log(error);
        })
    }, [id]);

    const deleteBlog = () => {
        axios.delete(`https://apitest.reachstar.io/blog/delete/${id}`).then(function(response){
            console.log("delete successfully:", response.data);
            navigate("/Dashbord");
        }).catch(function(error){
            console.log("delete error:", error);
        });
    };

    const edit = () => {
          axios.put(`https://apitest.reachstar.io/blog/edit/${id}`, {
            title: editTitle,
            description : editContent,
          }).then(function(response){
            console.log("edit successfully", response.data);
            setData(response.data);
          }).catch(function(error){
            console.log("edit error:", error)
          });
    };

    const postComment = () => {
        axios.post(`https://apitest.reachstar.io/comment/add/${id}`, {
            comment: comment,
        }).then(function(response){
            console.log("comment posted:", response.data);
            window.alert("comment posted successfully");
            navigate("/detail");
        }).catch(function(error){
            console.log("comment post error", error);
        });
    };

    const deleteComment = (commentId) => {
        axios.delete(`https://apitest.reachstar.io/comment/delete/${commentId}`)
        .then(function(response){
            console.log("comment deleted successfully:", response.data);
            window.location.reload();
        }).catch(function(error){
            console.log("comment delete error:", error);
        });
    };

    useEffect(() => {
        axios
          .get('https://apitest.reachstar.io/blog/list')
          .then((response) => setCommentContent(response.data) ).
          catch(function (error) {
            console.log("API Error:", error);
          });
      }, []);

    const findComment = commentContent.find((news)=>{

        return id === news.id.toString()
      });

    return(
        <Fragment>

            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="w-100 bg-light p-3 rounded-5">
                            {data.id ? (
              <div className="w-100 bg-light p-3">

                {editmode ? (
                    <ReactQuill
                        theme="snow"
                        value={editTitle}
                        onChange={setEditTitle}
                    />
                )
                : (
                    <p dangerouslySetInnerHTML={{__html: data.title}}></p>
                )
                }
                
                {editmode ? (
                  <ReactQuill
                    theme="snow"
                    className="editor"
                    value={editContent}
                    onChange={setEditContent}
                  />
                ) : (
                  <p className="detailsDescription" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                )}

                {/* edit & delete section */}
                <div className="w-100 btn-group mt-3 mb-3" role="group" aria-label="Basic example">
                  {editmode ? (
                    <button className="editbtn" onClick={edit}>
                      Save Changes
                    </button>
                  ) : (
                    <button className="editbtn" onClick={() => setEditmode(true)}>
                      Edit Blog
                    </button>
                  )}
                  <button className="editbtn" onClick={deleteBlog}>
                    Delete Blog
                  </button>
                </div>

                {/* Comment section */}
                    <div className="container mt-5 pb-5">
                    <div className="row">
                        <div className="col-12 ps-5 pe-5">
                        <div className="commentBox w-100">
                            <ReactQuill
                            theme="snow"
                            className="editor-comment"
                            value={comment}
                            onChange={setComment}
                            />
                            <button className="commentbtn" onClick={postComment}>
                            Post Comment
                            </button>
                        </div>

                        <div className="w-100 mt-5 pt-2">

                        <h6 className="commentsDetails">Comments</h6>

                        {findComment && findComment.comments && (
                            <div className="w-100 mt-5">
                            {findComment.comments.map((comment) => (
                                <div className="pt-5" key={comment.comment_id}>
                                <a className="userId" dangerouslySetInnerHTML={{ __html: comment.user_id }}></a>
                                <div className="mt-2 p-2 position-relative" style={{ border: "solid 1px #333333" }}>
                                    <p className="commentGet" dangerouslySetInnerHTML={{ __html: comment.comment }}></p>
                                    <button className="deleteComent" onClick={() => deleteComment(comment.id)}>Delete</button>
                                </div>
                                </div>
                            ))}
                            </div>
                        )}



                        </div>
                        </div>
                    </div>
                    </div>
              </div>
            ) : (
              <p>No data available</p>
            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Details;

