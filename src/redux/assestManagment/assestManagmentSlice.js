import { createSlice } from "@reduxjs/toolkit";
import { getAllISP, getAllItems, getInventoryData } from "./thunk";

const initialState = {
	data: [],
	IspData:[],
	Ispstatus:'idle',
	loading: false,
	status: "idle",
	inventoryData: [],
	inventoryStatus: "idle",
	inventoryDataPages: null,
	inventoryDataLimit: 40,
	ISPlimit: 40,
	ISPSortBy:'id',
	ISPOrderBy:'DESC',
	ISPCurrentPage: 1,
	ISPTotalRecords: 0,
	ISPTotalPages: 0,
	inventoryDataTotalCount: -1,
	inventoryDataCurrentPage: 0,
	inventoryDataOrderBy: "DESC",
	inventoryDataSortBy: "id",
	search: "",
};

export const itemMAsterSlice = createSlice({
	name: "inventory",
	initialState,
	reducers: {
		setLimit: (state, action) => {
            state.ISPlimit = action.payload.limit;
			state.ISPCurrentPage = 1;
            state.status = "idle";
			state.Ispstatus = "idle";
        },
        setCurrentPage: (state, action) => {
            state.ISPCurrentPage = action.payload.page;
            state.status = "idle";
			state.Ispstatus = "idle";
        },
		setInventoryDataPage: (state, action) => {
			state.inventoryDataCurrentPage = action.payload.page;
			state.inventoryStatus = "idle";
		},
		setInventroyDataLimit: (state, action) => {
			state.inventoryDataLimit = action.payload.limit;
			state.inventoryStatus = "idle";
		},
		setSearch: (state, action) => {
			state.search = action.payload.search;
			state.inventoryStatus = "idle";
			state.inventoryDataCurrentPage = 0;
		},
		setInitialPageAndSearch: (state, action) => {
			state.search = "";
			state.inventoryDataCurrentPage = 0;
			state.inventoryStatus = "idle";
		},
		setItemInventoryStatus: (state, action) => {
			state.inventoryStatus = action.payload.status;
		},
		setISPInventoryStatus: (state, action) => {
			state.Ispstatus = action.payload.status;
		},
		setInventoryDataOrderBy: (state, action) => {
			state.inventoryDataOrderBy = action.payload.inventoryDataOrderBy;
			state.inventoryStatus = "idle";
		},
		setInventoryDataSortBy: (state, action) => {
			state.inventoryDataSortBy = action.payload.inventoryDataSortBy;
			state.inventoryStatus = "idle";
		},
		setISPSortBy: (state, action) => {
			state.ISPSortBy = action.payload.sortBy;
			state.Ispstatus = 'idle';
		},
		setISPOrderBy: (state, action) => {
			state.ISPOrderBy = action.payload.orderBy;
			state.Ispstatus = 'idle';
		},
	},
	extraReducers: {
		[getAllItems.pending]: (state) => {
			state.loading = true;
		},
		[getAllItems.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload.data.list || payload.data;
			state.status = "completed";
			state.totalRecords = payload.data.totalRecords;
		},
		[getAllItems.rejected]: (state, payload) => {
			state.loading = false;
			state.data = [];
			state.totalRecords = 0;
			state.status = "rejected";
		},
		//
		[getAllISP.pending]: (state) => {
			state.loading = true;
		},
		[getAllISP.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.IspData = payload.data.list || payload.data;
			state.ISPTotalRecords= payload.data.totalRecords;
			state.ISPCurrentPage= payload.data.currentPage;
			state.ISPTotalPages= payload.data.totalPages;
			state.Ispstatus = "completed";
		},
		[getAllISP.rejected]: (state, payload) => {
			state.loading = false;
			state.IspData = [];
			state.ISPTotalRecords= 0;
			state.ISPCurrentPage= 1;
			state.ISPTotalPages= 0;
			state.Ispstatus = "rejected";
		},
		//
		[getInventoryData.fulfilled]: (state, { payload }) => {
			state.inventoryData = payload.data.list;
			state.inventoryStatus = "completed";
			state.inventoryDataPages = payload.data.totalPages;
			// state.inventoryDataLimit = payload.data.limit;
			state.inventoryDataTotalCount = payload.data.totalRecords;
		},
		[getInventoryData.rejected]: (state, payload) => {
			state.inventoryData = [];
			state.inventoryDataPages = 0;
			state.inventoryDataCurrentPage = 0;
			// state.inventoryDataLimit = 0;
			state.inventoryDataTotalCount = 0;
			state.inventoryStatus = "rejected";
		},
	},
});

// The reducer
export const {
	setInventoryDataPage,
	setInventroyDataLimit,
	setSearch,
	setLimit,
	setCurrentPage,
	setInitialPageAndSearch,
	setItemInventoryStatus,
	setISPInventoryStatus,
	setInventoryDataOrderBy,
	setInventoryDataSortBy,
	setISPSortBy,
	setISPOrderBy,
} = itemMAsterSlice.actions;
export const itemMasterReducer = itemMAsterSlice.reducer;
