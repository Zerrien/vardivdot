.contentHeader Blog
for blog in realm.getBlogPosts()
	.blogPost
		.infoArea
			.blogDate ${this.blog.date}
			.blogYear ${this.blog.year}
			.readUnread ${this.realm.isRead(this.blog)}
		.postArea
			.blogTitle ${this.blog.title}
			.blogSummary ${this.blog.summary}