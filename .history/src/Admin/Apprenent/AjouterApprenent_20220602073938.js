import React from 'react';
import "../Apprenent/AjoutAppStyle.css";
import { 
	BsEmojiSmileUpsideDown,
	BsEmojiWink,
	BsTelephoneForwardFill,
	BsEnvelopeOpenFill,
	BsFileEarmarkLock2Fill
} from "react-icons/bs";

function AjouteApprenant() {
  return (
	<form 
		className="row row-cols-lg-auto g-3 align-items-center"
		style={{
			padding:"15px",
			borderRadius: "20px",
            boxShadow: "0 2px 6px 0 rgba(236, 82, 81, .2), 0 24px 20px -24px rgba(0, 38, 57, .1)", 
			marginTop :"5px"
		}}
	>
		<div className="col-12">
			<label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
			<div className="input-group" >
				<div 
					className="input-group-text" 
					style={{
						backgroundColor:"#EC5251", 
						color:"#fff", 
						fontWeight:"bolder",
						fontSize:"20px"
					}}
				>
					<BsEmojiSmileUpsideDown/>
				</div>
				<input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Prénom"/>
			</div>
		</div>
		<div className="col-12">
			<label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
			<div className="input-group">
			<div 
				className="input-group-text"
				style={{
					backgroundColor:"#EC5251", 
					color:"#fff", 
					fontWeight:"bolder",
					fontSize:"20px"
				}}
			>
				<BsEmojiWink/>
			</div>
			<input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Nom" />
			</div>
		</div>
		<div className="col-12">
			<label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
			<div className="input-group ">
			<div 
				className="input-group-text" 
				style={{
					backgroundColor:"#EC5251", 
					color:"#fff", 
					fontWeight:"bolder",
					fontSize:"20px"
				}}
			>
				<BsTelephoneForwardFill/>
			</div>
			<input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Numéro de téléphone" />
			</div>
		</div>
		<div className="col-12">
			<label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
			<div className="input-group ">
			<div 
				className="input-group-text" 
				style={{
					backgroundColor:"#EC5251", 
					color:"#fff", 
					fontWeight:"bolder",
					fontSize:"20px"
				}}
			>
				<BsEnvelopeOpenFill/>
			</div>
			<input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Adresse mail" />
			</div>
		</div>
		<div className="col-12">
			<label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
			<div className="input-group ">
			<div 
				className="input-group-text" 
				style={{
					backgroundColor:"#EC5251", 
					color:"#fff", 
					fontWeight:"bolder",
					fontSize:"20px"
				}}
			>
				<BsFileEarmarkLock2Fill/>
			</div>
			<input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Mot de passe" />
			</div>
		</div>

		<div className="col-12 mx-auto">
			<button 
				type="submit" 
				className="btn text-align-center" 
				style={{
					backgroundColor:"#002639", 
					color:"#fff",
					fontSize:"20px",
					fontWeight:"bolder"
				}}
			>
				Ajouter
			</button>
		</div>
	</form>
  )
}

export default AjouteApprenant;