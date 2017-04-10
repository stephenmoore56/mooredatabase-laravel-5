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
			{{--angular component replaces this--}}
			<nav-bar-brand>
				<a class="navbar-brand" href="#">MOORE+DATABASE</a>
			</nav-bar-brand>
		</div>

		<div class="collapse navbar-collapse" id="navbar-main-collapse-1">
			<ul class="nav navbar-nav">
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						EXPERIENCE <span class="caret"></span>
					</a>
					{{--angular component replaces this--}}
					<ul ng-nav-bar class="dropdown-menu">
						<li><a href="#">Loading...</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown"
					   role="button" aria-haspopup="true" aria-expanded="false">
						BIRDING <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li><a href="/reports/years">Species &amp; Trips By Year</a></li>
						<li><a href="/reports/ytd">Species &amp; Trips YTD</a></li>
						<li><a href="/reports/months">Species &amp; Trips By Month</a></li>
						<li><a href="/reports/orders">Species By Order</a></li>
						<li><a href="/reports/locations">Species By Location</a></li>
						<li><a href="/reports/search">All Species Sighted</a></li>
						<li><a href="/reports/ducksAndWarblers">Ducks &amp; Warblers</a></li>
						<li><a href="/reports/all">Search All Species</a></li>
					</ul>
					<ul ng-nav-bar-reports style="display: none;">
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