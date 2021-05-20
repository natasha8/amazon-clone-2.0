import React from "react";
import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header>
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				<div className="mt-2  flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						objectFit="contain"
						className="link"
					/>
				</div>
				<div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
					<input
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
						type="text"
					/>
					<SearchIcon className="h-12 p-4 " />
				</div>
				<div className="text-white flex items-center text-xs space-x-6 mx-6 white-nowrap">
					<div className="link">Hello Natasha</div>
					<div className="link">Account & list</div>
					<div className="link">
						<p className="font-extra-bold md:text-sm">Return</p>
						<p>& Orders</p>
						<div className="relative link flex items-center ">
							<span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
								0
							</span>
							<ShoppingCartIcon className="h-10" />
							<p className="hidden md:inline font-extra-bold md:text-sm mt-2">
								Basket
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center space-x3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-1" />
					All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Amazon </p>
				<p className="link">Prime Video</p>
				<p className="link hidden lg:inline-flex">Prime Video</p>
				<p className="link hidden lg:inline-flex">Prime Video</p>
				<p className="link hidden lg:inline-flex">Prime Video</p>
				<p className="link hidden lg:inline-flex">Prime Video</p>
			</div>
		</header>
	);
};

export default Header;
