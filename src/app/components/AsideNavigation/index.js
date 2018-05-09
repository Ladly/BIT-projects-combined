import React from 'react'

import { Link } from 'react-router-dom'

export const AsideNavigation = () => {
	return (
		<aside className="col-xs-12 col-sm-12 col-md-3 col-lg-3 aside-nav">
			<ul className="list-group list-group-flush text-center">
				<li className="list-group-item"><Link to="/showusers">Users</Link></li>
				<li className="list-group-item"><Link to="/blog">Blog</Link></li>
				<li className="list-group-item"><Link to="/blogauthors">Blog authors</Link></li>
			</ul>
		</aside>
	)
}