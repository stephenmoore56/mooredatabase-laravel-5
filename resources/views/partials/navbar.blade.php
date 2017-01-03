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
			<a class="navbar-brand" href="/#/home">MOORE+DATABASE</a>
		</div>

		<div class="collapse navbar-collapse" id="navbar-main-collapse-1">
			<ul class="nav navbar-nav">
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						EXPERIENCE <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li><a href="/#/education">Education</a></li>
						<li><a href="/#/certifications">Certifications</a></li>
						<li><a href="/#/training">Training</a></li>
						<li><a href="/#/contact">Contact Me</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						BIRDING <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li>{{ HTML::link('reports/speciesByMonth','Species & Trips By Month') }}</li>
						<li>{{ HTML::link('reports/speciesByYear','Species & Trips By Year') }}</li>
						<li>{{ HTML::link('reports/speciesByOrder','Species By Order') }}</li>
						<li>{{ HTML::link('reports/speciesByLocation','Species By Location') }}</li>
						<li>{{ HTML::link('reports/speciesAll','All Species Sighted') }}</li>
						<li>{{ HTML::link('reports/searchAll','Search All Species') }}</li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						ADMIN <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						@if(Auth::check())
							<li>{{ HTML::link('admin/menu','Menu') }}</li>
							<li>{{ HTML::link('admin/logout','Log Out') }}</li>
						@else
							<li>{{ HTML::link('login','Log In') }}</li>
						@endif
					</ul>
				</li>
			</ul>
		</div>

	</div>
</nav>