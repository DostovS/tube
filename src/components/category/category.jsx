import { Stack } from '@mui/material'
import { category } from '../../constants'
import { colors } from '../../constants/colors'

const Category = () => {
	return (
		<Stack direction={'row'} sx={{ overflowX: 'scroll', cursor: 'pointer' }}>
			{category.map(item => (
				<button
					key={item.name}
					className='category-btn'
					style={{
						borderRadius: '0',
						background: colors.secondary,
						color: '#fff',
					}}
				>
					<span
						style={{
							color: '#fff',
							marginRight: '15px',
						}}
					>
						{item.icon}
					</span>
					<span>{item.name}</span>
				</button>
			))}
		</Stack>
	)
}

export default Category