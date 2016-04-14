CKEDITOR.plugins.add( 'simplelink', {
    requires: 'dialog',
    icons: 'simplelink',
    lang: 'en,pl',
    init: function( editor ) {
        editor.addCommand( 'simplelink', new CKEDITOR.dialogCommand( 'simplelinkDialog' ) );
        editor.ui.addButton( 'SimpleLink', {
            label:  editor.lang.simplelink.insertLink ,
            icons: 'simplelink',
            command: 'simplelink',
        });

        CKEDITOR.dialog.add( 'simplelinkDialog', this.path + 'dialogs/simplelink.js' );
    }
});