	const sendBtn = document.getElementById( 'soumission_commentaire' );
	const myForm = document.getElementById( 'formulaire_commentaire' );
	var errormsg = '';

    function errors( obj, label, text ){
        var text = document.createTextNode( text );
        var required = document.createElement( 'span' );
        var span = document.createElement( 'span' );			
        var parent = obj.length ? obj[0].parentNode : obj.parentNode;
        required.appendChild( span );
        span.appendChild( text );
        required.classList.add('required');
        required.classList.add('error-message' );
        parent.appendChild( required, obj );
        required.setAttribute( 'id', label );
        if (obj.length){
            obj[0].classList.add('required');
            obj[0].setAttribute( 'aria-invalid', true );
        } else {
            obj.classList.add('required');
            obj.setAttribute( 'aria-invalid', true );
        }	
    }

    // vérification de l'adresse email
    function isEmail( mail ){
        const regMail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
        return regMail.test( mail );
    }

    function deleteErrors(arrayInput){
        //reset
        arrayInput.forEach(element => {
            var node;
            if (element.length != undefined) {
                node = document.querySelector('.error-message' );
                element[0].removeAttribute('aria-required');
                element[0].classList.remove('required');
            } else {
                node = document.querySelector('.error-message' );
                element.removeAttribute('aria-required');
                element.classList.remove('required');
            }
            if( node ) {
                node.parentNode.removeChild( node );
            }
        });
        // efface le message de succès
        node = document.getElementById( 'msg-success' );
        if( node ) node.parentNode.removeChild( node );
    }
	
	sendBtn.addEventListener( 'click', ( event ) => {
        event.preventDefault();
		const nom = document.querySelector( '[name=\'name\']' );
		const email = document.querySelector( '[name=\'email\']' );
		const note = document.querySelectorAll( '[name=\'note\']' );
		const message = document.querySelector( '[name=\'message\']' );
		const successmessage = document.getElementById( 'reponse_formulaire');
		const arrayInput = [nom, email, note, message];
        var isChecked = false

        deleteErrors(arrayInput);

        note.forEach((element) => {
            if (element.checked) {isChecked = true}
        })

		if( !nom.value || !isEmail(email.value) || !isChecked || !message.value ){
			const msg = 'Ce champ est obligatoire';

            // Nom
			if( !nom.value ){
				errors( nom, 'required-name', msg );
			}else if( nom.value ){
				const node = document.getElementById('required-name');
				if( node ) {
					node.parentNode.removeChild( node );
					errormsg = '';
				}
			}
			
            // Message
            if( !message.value ){
				errors( message, 'required-message', msg );
			}else if( message.value ){
				const node = document.getElementById('required-message');
				if( node ) {
					node.parentNode.removeChild( node );
					errormsg = '';
				}
			}

            // Note
            if( !isChecked ){
                errors( note, 'required-note', msg );
            } else {
                const node = document.getElementById('required-note');
				if( node ) {
					node.parentNode.removeChild( node );
					errormsg = '';
				}
            }

            // Email
			if( !isEmail( email.value) ){
				if( !errormsg ) errormsg = email;
				const node = document.getElementById('required-email');
				if( node ) {
					node.parentNode.removeChild( node );}
				else if( email.value ) {
					errors( email, 'required-email', 'Saisissez un email valide' );
				}
				else{
					errors( email, 'required-email', msg );
				}
			}

            if( !nom.value ) {
                errormsg = nom;
            }
            else if ( !email.value ) {
                errormsg = email;
            } 
            else if ( !isEmail( email.value) ) {
                errormsg = email;
            } 
            else if ( !isChecked ){
                errormsg = note[0];
            } else {
                errormsg = message;
            }
			

		}
		//Envois avec succès
		else{
			const success = document.createElement( 'p' );
			const successText = document.createTextNode('Votre commentaire a bien été envoyé, il sera visible sur le site une fois la modération effectuée.');
			success.appendChild( successText );
			success.setAttribute( 'class','success' );
			success.setAttribute( 'id','msg-success' );
			successmessage.appendChild( success );
			//reset
			nom.value = '';
			email.value = '';
            note.forEach((element) => {
                element.checked = false;
            })
			message.value = '';
		}

	}, false );
