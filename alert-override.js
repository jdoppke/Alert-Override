function (window) {

    window.nativeAlert = window.alert;

    window.alert = function (text, opt) {

            var useNativeAlert = false,
                objClass = 'modalBox',
                prefixStr = '', 
                suffixStr = '',
                cancelText = 'Close',
                body = window.document.body,
                doc = document,
                callBack = false,
                overlayId = 'overlay',       // change overaly ID here if needed.
                modalId = 'modal',           // change modal ID here if needed.
                closeModalId = 'closeModal', // change close modal link ID here if needed.
                removeModal, overlayMarkup, modalMarkup;

            if (opt != null || opt != undefined) {
                useNativeAlert = opt.nativeAlert || false;
                objClass = opt.elemClass || 'modalBox';
                prefixStr = opt.prefix || '';
                suffixStr = opt.suffix || '';
                cancelText = opt.cancelText || 'Close',
                callBack = opt.callBack || false;
            }

            if (useNativeAlert) {

                window.nativeAlert(text);

            }  else {

                if (!doc.getElementById(overlayId) && !doc.getElementById(modalId)) {

                    overlayMarkup = doc.createElement('div');
                    overlayMarkup.id = overlayId;

                    modalMarkup = doc.createElement('div');
                    modalMarkup.id = modalId;
                    modalMarkup.className = objClass;

                    modalMarkup.innerHTML = prefixStr + text + suffixStr + '<div id="jsOverideCloseWrap"><a id="' + closeModalId + '" href="#" title="' + cancelText + '">' + cancelText + '</div>';

                    body.appendChild(overlayMarkup);
                    body.appendChild(modalMarkup);

                    doc.getElementById(overlayId).onclick = function() {
                        removeModal();
                        return false;
                    };

                    doc.getElementById(closeModalId).onclick = function() {
                        removeModal();

                        if (callBack) {
                            callBack();
                        }

                        return false;
                    };

            } else {

                window.nativeAlert(text);

            }

            removeModal = function() {

                var ol = doc.getElementById(overlayId);
                var ml = doc.getElementById(modalId);

                body.removeChild(ol);
                body.removeChild(ml);

            };

        }
            
    };
    
} (window) );
