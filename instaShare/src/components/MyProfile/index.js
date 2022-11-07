import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'
// import {RiAlertFill} from 'react-icons'

import Header from '../Header'

const statusContstants = {
  initial: 'INITIAL',
  myprofileSuccess: 'SUCCESS',
  myprofileFailure: 'FAIL',
}

class MyProfile extends Component {
  state = {
    profileData: [],
    myprofileFetchStatus: statusContstants.initial,
  }

  componentDidMount() {
    this.getMyProfile()
  }

  getMyProfile = async () => {
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/insta-share/my-profile`
    const options = {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessProfile(data)
    } else {
      this.onFailureProfile()
    }
  }

  onFailureProfile = () => {
    this.setState({myprofileFetchStatus: statusContstants.myprofileFailure})
  }

  onClickRetry = () => this.getMyProfile()

  renderProfileFailure = () => (
    <div>
      <img
        src="https://res.cloudinary.com/dysfydgi3/image/upload/v1665993040/MINI_PROJECT/SearchFailure_iupxnf.png"
        className=""
        alt="failure view"
      />
      <p>Something went wrong. Please try again</p>
      <button
        onClick={this.onClickRetry}
        className="retry-button"
        type="button"
      >
        Try again
      </button>
    </div>

    // <div className="home-retry">
    //   <RiAlertFill className="alert-triangle" alt="failure view" />
    //   <p>Something went wrong.Please try again</p>
    //   <button
    //     type="button"
    //     className="retry-button"
    //     onClick={this.onClickRetry}
    //   >
    //     Try again
    //   </button>
    // </div>
  )

  onSuccessProfile = data => {
    const profile = {...data.profile}
    const formattedData = {
      followersCount: profile.followers_count,
      followingCount: profile.following_count,
      id: profile.id,
      posts: profile.posts,
      postsCount: profile.posts_count,
      profilePic: profile.profile_pic,
      stories: profile.stories,
      userBio: profile.user_bio,
      userId: profile.user_id,
      userName: profile.user_name,
    }

    this.setState({
      profileData: formattedData,
      myprofileFetchStatus: statusContstants.myprofileSuccess,
    })
  }

  getStories = stories =>
    stories.map(each => (
      <li key={each.id} className="each-image">
        <img src={each.image} alt="my story" className="story-image" />
      </li>
    ))

  getPostsList = posts =>
    posts.map(each => (
      <li key={each.id}>
        <img src={each.image} alt="my post" className="post-image" />
      </li>
    ))

  renderPosts = () => {
    const {profileData} = this.state
    const {stories, posts} = profileData

    return (
      <>
        <ul className="post-list">{this.getStories(stories)}</ul>

        <hr className="h-line" />
        <div className="grid-post">
          <BsGrid3X3 />
          <h1 className="padding posts-heading">Posts</h1>
        </div>
        <ul className="post-list">{this.getPostsList(posts)}</ul>
      </>
    )
  }

  renderNoPostsView = () => (
    <>
      <div className="grid-post">
        <BsGrid3X3 />
        <p className="padding">Posts</p>
      </div>
      <div className="no-post-container">
        <div className="no-post-image">
          <BiCamera className="no-post-camera" />
        </div>

        <h1 className="no-posts">No Posts</h1>
      </div>
    </>
  )

  renderMyProfile = () => {
    const {profileData} = this.state
    const {
      profilePic,
      userName,
      postsCount,
      followersCount,
      followingCount,
      userId,
      userBio,
      posts,
      // stories,
    } = profileData
    return (
      <div className="profile-details">
        <div className="profile-pic-details">
          <div className="user-image-container">
            <img src={profilePic} alt="my profile" className="profile-image1" />
          </div>
          <div className="user-details">
            <h1 className="padding user-name">{userName}</h1>
            <ul className="post-followers-following-count ">
              <li className="count padding">{`${postsCount} Posts`}</li>
              <li className="count padding">{`${followersCount} followers`}</li>
              <li className="count padding">{`${followingCount} following`}</li>
            </ul>
            <p className="padding user-id">{userId}</p>
            <p className="padding">{userBio}</p>
          </div>
        </div>

        {posts.length > 0 ? this.renderPosts() : this.renderNoPostsView()}
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader">
      <Loader type="TailSpin" height={50} width={50} />
    </div>
  )

  renderMyProfileData = () => {
    const {myprofileFetchStatus} = this.state
    switch (myprofileFetchStatus) {
      case 'INITIAL':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderMyProfile()

      case 'FAIL':
        return this.renderProfileFailure()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="user-profile-container">
        <Header />

        {this.renderMyProfileData()}
      </div>
    )
  }
}
export default MyProfile
