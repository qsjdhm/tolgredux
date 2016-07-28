
import React from 'react';
import { connect } from 'react-redux';
import NewsOverview from 'components/NewsOverview';
import {pushList} from 'actions/news';

import jQuery from 'jquery';

class NewsList extends React.Component{
	search(){
		let keyword = this.refs.keyInput.value;
		// TODO: 获取新闻列表
		jQuery.ajax({
			url: 'http://www.tngou.net/api/search',
			data: { keyword, name: 'topword' },
			dataType: 'jsonp',
			success: (data)=>{
				if(data.status){
					this.props.dispatch(pushList(data.tngou))
				}
			}
		})
	}
	renderList(){

		if(this.props.list !== '') {
			return this.props.list.map(item =>{
				item.key = item.title;
				return React.createElement(NewsOverview, item);
			})
		}
	}
  	render(){
		return (
			<div>
				<div>
					<input ref="keyInput"/>
					<button onClick={this.search.bind(this)}>搜索</button>
				</div>
				<div>
					{this.renderList()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.info(1111);
	console.info(state);
	// 一般一组状态都是为一个页面服务的，所以把它们一股脑的映射过来比较方便
	// 但是把映射一一写出来也有好处，就是很容易看到组件里有什么属性
	return Object.assign({}, state.news);
}
export default connect(mapStateToProps)(NewsList);
