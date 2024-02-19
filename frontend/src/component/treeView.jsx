import * as React from 'react';
import Box from '@mui/material/Box';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './treeView.css';
import styled from 'styled-components';


const data = {
	id: 'root',
	title: 'پروژه ها',

	children: [
		{
			"id": "65cf312d52c2c25b64f56910",
			"title": "ساختمان",
			"children": [
				{
					"id": "65cf317a52c2c25b64f5691c",
					"title": "وب اپلیکیشن",
					"children": []
				},
				{
					"id": "65cf318f52c2c25b64f56920",
					"title": "حل مسائل",
					"children": [
						{
							"id": "65cf31b652c2c25b64f56924",
							"title": "مسئله شماره یک و دو",
							"children": []
						}
					]
				}
			]
		},
		{
			"id": "65cf315252c2c25b64f56914",
			"title": "به سوی ظهور",
			"children": [
				{
					"id": "65cf31df52c2c25b64f56928",
					"title": "آخرالزمان",
					"children": []
				}
			]
		},
		{
			"id": "65cf320f52c2c25b64f5692c",
			"title": "بدون زیر پروژه",
			"children": []
		}
	],

};

export default function treeView() {
	// const handleSelect = styled(TreeItem)(() => ({
	// 	backgroundColor:'red'
	// }))
	const renderTree = (nodes) => (
		<Container>

			<TreeItem
			
				sx={{
					'& > .MuiTreeItem-content.Mui-selected': {
						color: 'rgba(241, 95, 43, 1)',
						textDecoration:'overline',
						textDecorationStyle:'double',
						textDecorationThickness:'2px',
						// border: "2px solid rgba(241, 95, 43, 1)",
						// backgroundColor: 'rgba(241, 95, 43, 0.25)',
					},


					'& .css-1bcfi89-MuiTreeItem-content.Mui-selected': {
						backgroundColor: '#fff !important',
					},
					'& .css-1oqqzyl-MuiContainer-root': {
						marginLeft: '-6.1%'
					},
					'& .css-i4bv87-MuiSvgIcon-root': {
						marginRight: '-470%',
						marginTop: '-20%'
					},
				}}
				nodeId={nodes.id}
				label={
					<Typography
						sx={{
							borderRadius: '45px',
							fontSize: '15px',
							color: 'black',
							//   mt:'1px',
							mb: '3px',
							//   mr:'2px', 
							//   pr:'center', 
							p: '8px 20px 8px 8px',
							//   pb: '-3px', 
							fontFamily: 'vazir',
							textAlign: 'right',
							bgcolor: 'rgba(241, 95, 43, 0.2)',
							//SALAM
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							//   "&$selected": {
							// 	backgroundColor: "red"},
							":hover": {
								whiteSpace: 'normal',
								border: "2px solid rgba(241, 95, 43, 1)",
								backgroundColor: 'rgba(241, 95, 43, 0.25)',
								overflow: 'visible',
								// overflowWrap:'break-word',
							},
							maxHeight: "30px",
							maxWidth: 'auto',
							height: "fit-content",
							width: "30%",


						}} >
						{nodes.title}</Typography>}
			>

				{Array.isArray(nodes.children)
					? nodes.children.map((node) => renderTree(node))
					: null}
			</TreeItem>
		</Container>

	);


	return (
		<Box sx={{

			border: '1px solid gray',
			height: '100hv',
			width: '50%',
			bgcolor: "white",
		}}

		>
			<TreeView
				aria-label="rich object"
				defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
				defaultExpandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
				defaultExpanded={['root']}
			>
				{renderTree(data)}
			</TreeView>
		</Box>
	)
}









