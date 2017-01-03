<div class="form-group">
	<label for="orderFilter" class="label-control">Order:</label>
	<select class="form-control input-sm" name="orderFilter" id="orderFilter" data-ng-model="selectedOrder"
			data-ng-options="order.order_name for order in orders">
		<option value="">All Orders</option>
	</select>
</div>
