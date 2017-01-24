<div class="form-group" style="margin-bottom: 10px;">
	<label for="topNSelector" class="label-control">Show:</label>
	<select class="form-control input-sm" data-ng-model="numLimit" data-ng-init="numLimit = 'Infinity'" name="topNSelector"
			id="topNSelector">
		<option value="Infinity" selected="selected">All</option>
		<option value="10">Top 10</option>
		<option value="20">Top 20</option>
		<option value="30">Top 30</option>
		<option value="40">Top 40</option>
		<option value="50">Top 50</option>
	</select>
</div>
