//You should implement your task here.

module.exports = function towelSort(matrix) {
	if (matrix) {
		const arr = [];
		for (let i = 0; i < matrix.length; i++) {
			const temp = !(i % 2) ? matrix[i] : matrix[i].reverse();
			for (let k = 0; k < temp.length; k++) {
				arr.push(matrix[i][k]);
			}
		}
		return arr;
	}
	return [];
}