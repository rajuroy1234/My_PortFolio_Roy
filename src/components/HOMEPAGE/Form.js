import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/HOMEPAGE/Form.css';

const Form = () => {
  return (
    <>
      <form class="__login_form min-vw-25 rounded-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Your Name</label>
          <input type="text" class="form-control min-vw-25" id="name" aria-describedby="emailHelp" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Comments</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
        <button type="submit" class="btn min-vw-25 __comment_submit">Surrender!</button>
      </form>
    </>
  )
}

export default Form
