const APIUtil = {
  followUser: id => {
    APIUtil.changeFollowStatus(id, 'POST')
  },

  unfollowUser: id => {
    APIUtil.changeFollowStatus(id, 'DELETE')
  },
  
  searchUsers: query => (
    $.ajax({
      url: '/users/search',
      dataType: 'json',
      method: 'GET',
      data: { query }
    })
  )
  
}

module.exports = APIUtil;