<script lang="ts">
	let code: string = '';
	let status;
	let showSpin: Boolean = false;
	let error: String = '';
	let CodeError: String = '';
	const codeValidation = () => {
		if (code.length === 0) {
			error = 'Code Must Not be empty';
			setTimeout(() => {
				error = '';
			}, 3000);
		} else {
			showSpin = true;
		}
	};
</script>

<div class="container">
	{#if showSpin === false}
		{#if error.length != 0}
			<h2>{error}</h2>
		{/if}
		{#if CodeError.length != 0}
			<h2>{CodeError}</h2>
		{/if}
		<h1>Enter Code!!</h1>
		<input bind:value={code} type="text" placeholder="code" />
		<div class="btnContainer">
			<div class="flexButton">
				<a href={code.length === 0 ? ' ' : `dumb/${code}`}>
					<button on:click={codeValidation}>Done?</button>
				</a>
				<a href="/create">
					<button>Create?</button>
				</a>
			</div>
		</div>
	{:else}
		<code style="background:pink;">Loading...</code>
	{/if}
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
	code {
		font-family: monospace;
		position: absolute;
		top: 40%;
		background: #fff;
		/* padding-left: 20px; */
		/* padding-right: 10px; */
		padding: 10px;
		border-radius: 6px;
		font-weight: 1000;
		font-size: 35px;
	}
	button {
		width: 130px;
		height: 40px;
		background: #fff;
		border: 1px solid pink;
		border-radius: 7px;
		font-family: monospace;
		font-weight: 1000;
		margin: 10px;
		font-size: 20px;
	}
	.flexButton {
		display: flex;
		flex-direction: column;
	}
	.btnContainer {
		position: absolute;
		top: 57%;
	}
	button:hover {
		background: pink;
		cursor: pointer;
	}
	h1 {
		font-family: monospace;
		position: absolute;
		top: 43%;
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
	input {
		background: pink;
		border: none;
		border-radius: 7px;
		font-family: monospace;
		font-weight: 1000;
		position: absolute;
		font-size: 20px;
		position: absolute;
		top: 50%;
		padding: 10px;
		width: 40%;
		outline: none;
	}
</style>
