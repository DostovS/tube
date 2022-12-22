import { colors } from '../../constants/colors'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Category } from '../'

const Main = () => {
	return (
		<Stack>
			<Category/>
			<Box p={2} sx={{ height: '90vh' }}>
				<Container maxWidth={'90%'}>
					<Typography variant={'h4'} fontWeight={'bold'} mb={2}>
						<span style={{ color: colors.secondary }}>videos</span>
					</Typography>
				</Container>
			</Box>
		</Stack>
	)
}

export default Main