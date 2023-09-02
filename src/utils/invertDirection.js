const invertDirection = {
	asc: "desc",
	desc: "asc",
};

export default (columnNameFlag, orderBy) => {
	return columnNameFlag ? invertDirection[orderBy] : "desc";
};
