const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = (this.$el.data('initial-follow-state');
    
    this.render();
  }

  handleClick(event) {
    let followToggle = this;
    event.preventDefault();
  
    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    } else if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      APIUtil.followUser(this.userId).then(() => {
        followToggle.followState = 'followed';
        followToggle.render();
      });
    }
  }
  
  render() {
    switch (this.followState) {
      case 'followed':
        this.$el.html('Unfollow!');
        this.$el.prop('disabled', false);
        break;
      case 'unfollowed':
        this.$el.html('Follow!');
        this.$el.prop('disabled', false);
        break;
      case 'following':
        this.$el.html('Following...');
        this.$el.prop('disabled', true);
        break;
      case 'unfollowing':
        this.$el.html('Unfollowing...');
        this.$el.prop('disabled', true);
        break;
    }
  }
}


module.exports = FollowToggle;