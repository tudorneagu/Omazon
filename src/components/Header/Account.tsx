function Account() {
	return (
		<div className="flex flex-col">
			<p className="text-main-lowest menu-s">Bonjour, identifiez vous</p>
			<div className="flex items-center ">
				<p className="text-main-low menu-m pr-1">Compte et listes</p>
				<img className="w-2 h-2" src="./assets/icons/down.svg" alt="" />
			</div>
		</div>
	);
}

export default Account;
