export default {
	name: "DataTableTable",
	props: {
		tableClass: String,
		customClass: String,
		columns: Array,
		data: Array,
		dataDisplayed: Array,
		dataFiltered: Array,
		emptyTableText: String,
		footerComponent: [Object, String],
		isEmpty: Boolean,
		isLoading: Boolean,
		loadingComponent: [Object, String],
		numberOfColumns: Number,
		sortingIconComponent: Object,
		sortingIndexComponent: Object,
	},
	computed: {
		formatData(format, data) {
		  switch (format) {
			case "currency":
			  return Intl.NumberFormat("de-DE", {
				style: "currency",
				currency: "EUR"
			  }).format(data);
			case "percentage":
			  return (
				parseFloat(data)
				  .toFixed(2)
				  .replace(".", ",") + " %"
			  );
			case "float":
			  return parseFloat(data)
				.toFixed(2)
				.replace(".", ",");
			case "int":
			  return Math.round(data);
			case "piece":
			  return Math.round(data) + " Stk.";
			default:
			  return data;
		  }
		}
	  },
};
