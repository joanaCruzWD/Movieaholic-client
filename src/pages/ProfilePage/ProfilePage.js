import React from 'react';

function ProfilePage({ user }) {

  return (
    <div>
      <h1>Profile Page</h1>
      <form >
        <label>Name</label>
        {/* <input type="text" name="name" value={user.name} onChange={handleName} /> */}

        {/* <input type="file" onChange={handleFileUpload} /> */}

        <button type="submit"> Edit profile</button>
      </form>
    </div>
  );
}

export default ProfilePage;

//!Check this page! need to do some changes