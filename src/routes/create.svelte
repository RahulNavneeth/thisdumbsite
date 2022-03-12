<script lang="ts">
	import { supabase } from './supabase.js';

	import axios from 'axios';
	let GenCode: string = '';
	let msg: string = '';
	let error: String = '';
	let showCode: Boolean = false;
	let fileData: string = '';
	let imgData;
	let dataGet = [];

	const showImage = (e) => {
		let image = e.target.files[0];
		imgData = image;
		const url = URL.createObjectURL(image);
		// console.log(image);
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			fileData = String(e.target.result);
		};
	};

	const GenerateCode = () => {
		let char: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghilflmnopqrstuvwxyz0123456789';
		GenCode = '';
		for (let i = 0; i < 15; i++) {
			GenCode += char.charAt(Math.floor(Math.random() * char.length));
		}
	};
	const submit = () => {
		if (GenCode.length === 0 || fileData.length === 0 || msg.length === 0) {
			error = 'Inputs cannot be empty!!';
			setTimeout(() => {
				error = '';
			}, 3000);
		} else {
			showCode = true;

			const formData = new FormData();
			formData.append('file', imgData);
			formData.append('upload_preset', 'a35mvlxl');
			axios
				.post('https://api.cloudinary.com/v1_1/memedio/image/upload', formData)
				.then(async (res) => {
					const { data, error } = await supabase
						.from('dumbpost')
						.insert({ code: GenCode, imgurl: res.data.secure_url, message: msg });

					if (error) {
						console.log(error);
					} else {
						dataGet = data;
					}
				});
		}
	};

	const copy = () => {
		navigator.clipboard.writeText(GenCode);
		alert(`Code Coppied : ${GenCode}`);
	};
</script>

<div class="container">
	{#if error.length != 0}
		<h2>{error}</h2>
	{/if}
	{#if showCode === false}
		{#if fileData.length != 0}
			<img style="width:350px;border-radius:20px;" src={fileData} alt="ShowInImage" />
		{/if}
		<div class="innerCon">
			<h1 style="margin: 0px;">{GenCode}</h1>

			<button on:click={GenerateCode}>Generate Code!</button>
			<label for="files" class="btn">Select Image</label>
			<input style="margin:10px;" placeholder="Enter Message" bind:value={msg} type="text" />

			<input on:change={showImage} id="files" style="display:none;" type="file" />
			<button style="top: 70%;" on:click={submit}>Submit</button>
		</div>
	{/if}
	{#if showCode === true}
		{#if dataGet.length === 0}
			<code style="position:absolute;background:pink;top:50%;margin:10px;"
				><i class="fas fa-spinner fa-spin" /></code
			>
		{:else}
			<div class="codeModal">
				<div class="codeModalFl">
					<code on:click={copy} style="cursor:pointer;margin:10px;">Copy</code>
					<code><a href="/dumb/{GenCode}">{GenCode}</a></code>
					<a href="/"><code style="margin:10px;">Home</code></a>
				</div>
			</div>
		{/if}
	{/if}

	<!-- {JSON.stringify(data)} -->
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* height: 940px; */
	}
	.innerCon {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 40%;
		width: 100%;
	}
	input {
		background: pink;
		border: none;
		border-radius: 7px;
		font-family: monospace;
		font-weight: 1000;
		/* position: absolute; */
		font-size: 20px;
		/* position: absolute; */
		/* top: 64%; */
		padding: 10px;
		width: 50%;
		outline: none;
	}
	.codeModal {
		background: pink;
		padding: 30px;
		width: 40%;
		text-align: center;
		border-radius: 19px;
		position: absolute;
		top: 50%;
		/* box-shadow: 10px 10px 770px 0px; */
	}
	a {
		text-decoration: none;
		color: black;
	}
	h1 {
		font-family: monospace;
		/* position: absolute; */
		/* top: 40%; */
		background: #fff;
		/* padding-left: 20px; */
		/* padding-right: 10px; */
		padding: 10px;
		border-radius: 6px;
	}
	code {
		font-family: monospace;
		/* position: absolute; */
		top: 40%;
		background: #fff;
		/* padding-left: 20px; */
		/* padding-right: 10px; */
		padding: 10px;
		border-radius: 6px;
		font-weight: 1000;
		font-size: 35px;
	}
	h2 {
		font-family: monospace;
		position: absolute;
		top: 20%;
		padding: 10px;
		width: 25%;
		background-color: rgb(231, 52, 52);
		border-radius: 10px;
		text-align: center;
	}
	button {
		width: 190px;
		height: 40px;
		background: #fff;
		border: 1px solid pink;
		border-radius: 7px;
		font-family: monospace;
		font-weight: 1000;
		margin: 10px;
		font-size: 20px;
		/* position: absolute; */
		/* top: 50%; */
		/* left: 50%; */
	}
	button:hover {
		background: pink;
		cursor: pointer;
	}
	label {
		background: #fff;
		border: 1px solid pink;

		/* border: none; */
		/* color: #000; */
		border-radius: 7px;
		font-family: monospace;
		font-weight: 1000;
		/* position: absolute; */
		font-size: 20px;
		/* position: absolute; */
		/* top: 57%; */
		padding: 10px;

		width: 165px;
		text-align: center;
		outline: none;
	}
	label:hover {
		background: pink;
		cursor: pointer;
	}
</style>
