<form class="form-inline filterForm">
	<div class="form-group" style="margin-bottom: 10px;">
		<label for="searchString" class="control-label">Search:</label>
		<input type="search" id="searchString" name="searchString" class="form-control input-sm"
			   placeholder="Search for..."
			   data-ng-model="searchString" size="50" maxlength="50">
	</div>
	<div class="form-group" style="margin-bottom: 10px;">
		<label for="orderId" class="control-label">Order:</label>
		<select class="form-control input-sm" name="orderId" id="orderId" data-ng-model="orderId"
				data-ng-options="order.id as order.order_name for order in orders"
				data-ng-init="orderId = -1 || orders[0].id">
		</select>
	</div>
	<div class="form-group" style="margin-bottom: 10px;">
		<button data-ng-click="searchAll()" class="btn btn-primary btn-sm">
			<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
			Search
		</button>
	</div>
</form>
