(self.webpackChunk_lowdefy_blocks_aggrid=self.webpackChunk_lowdefy_blocks_aggrid||[]).push([[120],{7612:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var i=o(1371),n=o.n(i),r=o(4159),s=o(4266),l=(o(6590),["quickFilterValue"]);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},d.apply(this,arguments)}class a extends n().Component{constructor(e){super(e),this.onGridReady=this.onGridReady.bind(this),this.onRowClick=this.onRowClick.bind(this),this.onCellClicked=this.onCellClicked.bind(this),this.onRowSelected=this.onRowSelected.bind(this),this.onSelectionChanged=this.onSelectionChanged.bind(this),this.onRowDragEnd=this.onRowDragEnd.bind(this),this.onCellValueChanged=this.onCellValueChanged.bind(this),this.onFilterChanged=this.onFilterChanged.bind(this)}componentDidUpdate(){this.gridApi&&this.gridApi.resetRowHeights()}onGridReady(e){var t=this;this.gridApi=e.api,this.gridColumnApi=e.columnApi,this.props.methods.registerMethod("exportDataAsCsv",(e=>this.gridApi.exportDataAsCsv(e))),this.props.methods.registerMethod("sizeColumnsToFit",(()=>this.gridApi.sizeColumnsToFit())),this.props.methods.registerMethod("setFilterModel",(e=>this.gridApi.setFilterModel(e))),this.props.methods.registerMethod("autoSize",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{skipHeader:o,colIds:i}=e,n=i||[];i||t.gridColumnApi.getAllColumns().forEach((e=>{n.push(e.getId())})),t.gridColumnApi.autoSizeColumns(n,o)}))}onRowClick(e){this.props.events.onRowClick&&this.props.methods.triggerEvent({name:"onRowClick",event:{row:e.data,selected:this.gridApi.getSelectedRows(),rowIndex:e.rowIndex,index:parseInt(e.node.id)}})}onCellClicked(e){this.props.events.onCellClick&&this.props.methods.triggerEvent({name:"onCellClick",event:{cell:{column:e.colDef.field,value:e.value},colId:e.column.colId,index:parseInt(e.node.id),row:e.data,rowIndex:e.rowIndex,selected:this.gridApi.getSelectedRows()}})}onRowSelected(e){e.node.selected&&this.props.events.onRowSelected&&this.props.methods.triggerEvent({event:{row:e.data,selected:this.gridApi.getSelectedRows()},index:parseInt(e.node.id),name:"onRowSelected",rowIndex:e.rowIndex})}onSelectionChanged(){this.props.events.onSelectionChanged&&this.props.methods.triggerEvent({name:"onSelectionChanged",event:{selected:this.gridApi.getSelectedRows()}})}onFilterChanged(e){this.props.events.onFilterChanged&&this.props.methods.triggerEvent({name:"onFilterChanged",event:{rows:e.api.rowModel.rowsToDisplay.map((e=>e.data))}})}onRowDragEnd(e){if(e.overNode!==e.node){var t=e.node.data,o=e.overNode.data,i=this.props.value.indexOf(t),n=this.props.value.indexOf(o),r=this.props.value.slice(),s=r[i];r.splice(i,1),r.splice(n,0,s),this.props.methods.setValue(r),this.gridApi.setRowData(this.props.value),this.gridApi.clearFocusedCell(),this.props.methods.triggerEvent({name:"onRowDragEnd",event:{fromData:t,toData:o,fromIndex:i,toIndex:n,newRowData:r}})}}onCellValueChanged(e){var t=this.props.value;t[parseInt(e.node.id)][e.colDef.field]=e.newValue,this.props.methods.setValue(t),this.props.methods.triggerEvent({name:"onCellValueChanged",event:{field:e.colDef.field,index:parseInt(e.node.id),newRowData:t,newValue:e.newValue,oldValue:e.oldValue,rowData:e.data,rowIndex:e.rowIndex}})}render(){var e=this.props.properties,{quickFilterValue:t}=e,o=function(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,l);return t&&""===t&&this.gridApi.setQuickFilter(t),n().createElement(r.AgGridReact,d({onSelectionChanged:this.onSelectionChanged,onRowSelected:this.onRowSelected,onRowClicked:this.onRowClick,onCellClicked:this.onCellClicked,onGridReady:this.onGridReady,onRowDragEnd:this.onRowDragEnd,onCellValueChanged:this.onCellValueChanged,postSort:this.postSort,modules:s.AllCommunityModules},o,{rowData:this.props.value}))}}const h=a},3120:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var i=o(1371),n=o.n(i),r=o(5787),s=(o(3324),o(7612));function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h=e=>{var{blockId:t,events:o,loading:i,methods:r,properties:l,required:a,validation:h,value:p}=e;return n().createElement("div",{id:t,className:"ag-theme-alpine ".concat(r.makeCssClass(d({width:"100%",height:l.height||500},l.style)))},n().createElement(s.Z,{blockId:t,events:o,loading:i,methods:r,properties:l,required:a,validation:h,value:p}))};h.defaultProps=r.blockDefaultProps;const p=h}}]);