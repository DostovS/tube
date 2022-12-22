import { Search } from '@mui/icons-material'
import { Paper, IconButton } from '@mui/material'
import { colors } from '../../constants/colors'

const SearchBar = () => {
	return (
		<Paper
			component={'form'}
			sx={{
				border: `1px solid ${colors.secondary}`,
				pl: 2,
				boxShadow: 'none',
				mr: 5,
			}}
		>
			<input
				type='text'
				placeholder='Search...'
				className='search-bar'
			/>
			<IconButton type='submit' sx={{ p: '10px', color: colors.secondary }}>
				<Search />
			</IconButton>
		</Paper>
	)
}

export default SearchBar