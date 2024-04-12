import React from "react";
import axios from "axios";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import ColorPicker from "../components/ColorPicker";
import ItemList from "../components/ItemList";
class Item extends React.Component {
	render() {
		return (
			<form className="mx-10 mb-10">
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">Items</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							This information will be displayed publicly so be careful what you share.
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
									Name
								</label>
								<div className="mt-2">
									<div
										className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
										<input
											type="text"
											name="username"
											id="username"
											autoComplete="username"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="janesmith"
										/>
									</div>
								</div>
							</div>
							{/*<div className="col-span-full">*/}
							{/*	<label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">*/}
							{/*		Photo*/}
							{/*	</label>*/}
							{/*	<div className="mt-2 flex items-center gap-x-3">*/}
							{/*		<UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true"/>*/}
							{/*		<button*/}
							{/*			type="button"*/}
							{/*			className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"*/}
							{/*		>*/}
							{/*			Change*/}
							{/*		</button>*/}
							{/*	</div>*/}
							{/*</div>*/}

							{/*<div className="col-span-full">*/}
							{/*	<label htmlFor="cover-photo"*/}
							{/*		   className="block text-sm font-medium leading-6 text-gray-900">*/}
							{/*		Cover photo*/}
							{/*	</label>*/}
							{/*	<div*/}
							{/*		className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">*/}
							{/*		<div className="text-center">*/}
							{/*			<PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>*/}
							{/*			<div className="mt-4 flex text-sm leading-6 text-gray-600">*/}
							{/*				<label*/}
							{/*					htmlFor="file-upload"*/}
							{/*					className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"*/}
							{/*				>*/}
							{/*					<span>Upload a file</span>*/}
							{/*					<input id="file-upload" name="file-upload" type="file"*/}
							{/*						   className="sr-only"/>*/}
							{/*				</label>*/}
							{/*				<p className="pl-1">or drag and drop</p>*/}
							{/*			</div>*/}
							{/*			<p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>*/}
							{/*		</div>*/}
							{/*	</div>*/}
							{/*</div>*/}
						</div>
					</div>

					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can
							receive mail.</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-2">
								<label htmlFor="first-name"
									   className="block text-sm font-medium leading-6 text-gray-900">
									Price
								</label>
								<div className="mt-2">
									<input
										type="number"
										name="price"
										id="price"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label htmlFor="color"
									   className="block text-sm font-medium leading-6 text-gray-900">
									Color
								</label>
								<div className="mt-2">
									<ColorPicker/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="size"
									   className="block text-sm font-medium leading-6 text-gray-900">
									Size
								</label>
								<div className="mt-2">
									<select className="form-select w-full">
										<option value="" selected>Choose Size</option>
										<option value="small">Small</option>
										<option value="normal">Normal</option>
										<option value="big">Big</option>
									</select>
								</div>
							</div>
							<div className="sm:col-span-6">
								<label htmlFor="description"
									   className="block text-sm font-medium leading-6 text-gray-900">
									Description
								</label>
								<div className="mt-2">
									<input
										type="textarea"
										name="description"
										id="description"
										className="rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 form-textarea w-1/2 h-32 resize-none writing-direction-rtl text-left overflow-wrap"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
						Cancel
					</button>
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Save
					</button>
				</div>
			</form>
	)
		;
	}
}

export default Item;