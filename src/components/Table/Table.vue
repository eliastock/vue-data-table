<template>
	<div class="data-table-table">
		<table :class="tableClass">
			<thead>
				<tr>
					<th
						v-for="(column, i) in columns"
						:key="i"
						:data-sorting="column.sortingMode"
						:class="{ sortable: column.sortable }"
						class="column"
						@click="$emit('sort-column', column)">
						<div class="column-content">
							<span>{{ column.title }}</span>
							<component
								:index="column.sortingIndex"
								:is="sortingIndexComponent"
								v-if="column.sortingIndex > 0"
							/>
							<component
								:is="sortingIconComponent"
								v-if="column.sortable"
							/>
						</div>
					</th>
				</tr>
			</thead>
			<tbody v-if="! isLoading">
				<tr v-if="isEmpty">
					<td :colspan="numberOfColumns" class="empty-table-cell">
						{{ emptyTableText }}
					</td>
				</tr>
				<tr v-for="(data, i) in dataDisplayed" :key="i" >
					<td v-for="(column, j) in columns" :key="j" :class="column.columnClass">
						<component
							v-if="column.component"
							:is="column.component"
							:data="data"
							:column="column"
						/>
						<span v-else>{{ formatData(column.format, data[column.key]) }}</span>
					</td>
				</tr>
			</tbody>
			<component v-if="isLoading" :is="loadingComponent"/>
			<component
				v-if="footerComponent !== null" :is="footerComponent"
				v-bind="{ data, dataDisplayed, dataFiltered }"
			/>
		</table>
	</div>
</template>
<script src="./Table.js"></script>
<style src="./Table.scss" lang="scss"></style>
