import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faReply,
  faPlusSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "../discuss.css"; // Import your CSS file for styling

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [replyingCommentId, setReplyingCommentId] = useState(null);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    // Initialize likes count for each comment to 0
    const initialLikes = {};
    comments.forEach(comment => {
      initialLikes[comment.id] = 0;
    });
    setLikes(initialLikes);
  }, [comments]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const timestamp = new Date().toLocaleString(); // Get the current timestamp
      if (editingCommentId !== null) {
        // If editing an existing comment
        const updatedComments = comments.map((comment) =>
          comment.id === editingCommentId ? { ...comment, text: newComment } : comment
        );
        setComments(updatedComments);
        setEditingCommentId(null);
      } else {
        // If posting a new comment
        const newComments = [
          ...comments,
          { id: Date.now(), text: newComment, timestamp, replies: [] },
        ];
        setComments(newComments);
      }
      setNewComment("");
    }
  };

  const handleDeleteComment = (id) => {
    const filteredComments = comments.filter((comment) => comment.id !== id);
    setComments(filteredComments);
  };

  const handleEditComment = (id) => {
    setEditingCommentId(id);
  };

  const handleReplyComment = (id) => {
    setReplyingCommentId(id);
  };

  const handleAddReply = (id, replyText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id
        ? { ...comment, replies: [...comment.replies, replyText] }
        : comment
    );
    setComments(updatedComments);
    setReplyingCommentId(null);
  };

  const handleLikeComment = (id) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: prevLikes[id] + 1,
    }));
  };

  return (
    <div className="heading">
      <h1>Discussion Box</h1>
      <div className="comment-section">
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <div className="comment-content">
                <p>{comment.text}</p>
                <div className="comment-meta">
                  <span className="comment-timestamp">{comment.timestamp}</span>
                  <div className="comment-actions">
                    <button onClick={() => handleEditComment(comment.id)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => handleDeleteComment(comment.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <button onClick={() => handleReplyComment(comment.id)}>
                      <FontAwesomeIcon icon={faReply} />
                    </button>
                    <button onClick={() => handleLikeComment(comment.id)}>
                      <FontAwesomeIcon icon={faThumbsUp} style={{ color: likes[comment.id] > 0 ? 'red' : 'black' }} />
                    </button>
                    <span>{likes[comment.id]}</span>
                  </div>
                </div>
              </div>
              {replyingCommentId === comment.id && (
                <div className="reply-section">
                  <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Write your reply..."
                    className="comment-input"
                  />
                  <button
                    onClick={() => handleAddReply(comment.id, newComment)}
                  >
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </button>
                </div>
              )}
              {comment.replies.length > 0 && (
                <ul className="reply-list">
                  {comment.replies.map((reply, index) => (
                    <li key={index} className="reply-item">
                      {reply}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="comment-form">
          <div style={{ display: "flex" }}>
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Write your comment..."
              className="comment-input"
            ></textarea>
            <button type="submit" className="comment-btn">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
