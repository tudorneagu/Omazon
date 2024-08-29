const controllerWrapper = (controller) => async (req, res, next) => {
	try {
		await controller(req, res, next);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

export default controllerWrapper;
