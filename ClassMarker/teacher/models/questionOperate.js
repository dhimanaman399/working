var questionOperations = {
	questions: [],
	add(question) {
		this.questions.push(question);
		var q = this.questions.forEach((ele, index) => {
			console.log(ele, index);
		});
		return q;
	},
	delete() {},
	toggle(id) {
		var subArr = this.questions.find(ele => ele == this.search(id).isMarked);
		console.log(subArr);
	},
	search(id) {
		return this.questions.find(ele => ele.id == id);
	},
	update() {},
	sort() {}
};
// countItemInCarts(){
//     return this.products.filter(product=>product.isAdded).length;
//   },