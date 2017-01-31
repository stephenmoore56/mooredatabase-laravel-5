<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container-fluid">

		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar-main-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/">MOORE+DATABASE</a>
		</div>

		<div class="collapse navbar-collapse" id="navbar-main-collapse-1">f
			<ul class="nav navbar-nav">
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						EXPERIENCE <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<nav-bar></nav-bar>
						{{--<li><a routerLink="education" routerLinkActive="active">Education</a></li>--}}
						{{--<li><a routerLink="certifications" routerLinkActive="active">Certifications</a></li>--}}
						{{--<li><a routerLink="training" routerLinkActive="active">Training</a></li>--}}
						{{--<li><a routerLink="contact" routerLinkActive="active">Contact Me</a></li>--}}
					</ul>
				</li>
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						BIRDING <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li><a href="/reports/speciesByMonth">Species & Trips By Month</a></li>
						<li><a href="/reports/speciesByYear">Species & Trips By Year</a></li>
						<li><a href="/reports/speciesByOrder">Species By Order</a></li>
						<li><a href="/reports/speciesByLocation">Species By Location</a></li>
						<li><a href="/reports/speciesAll">All Species Sighted</a></li>
						<li><a href="/reports/searchAll">Search All Species</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						ADMIN <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						@if(Auth::check())
							<li><a href="/admin/menu">Menu</a></li>
							<li><a href="/admin/logout">Log Out</a></li>
						@else
							<li><a href="/login">Log In</a></li>
						@endif
					</ul>
				</li>
			</ul>
		</div>

	</div>
</nav>