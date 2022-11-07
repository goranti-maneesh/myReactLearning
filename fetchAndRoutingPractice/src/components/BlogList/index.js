import {Component} from 'react'

import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogsApiData()
  }

  getBlogsApiData = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      title: eachItem.title,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
    }))

    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state

    return (
      <div className="blog-details">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogDetails.map(item => <BlogItem itemDetails={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
