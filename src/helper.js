
/* 
THIS DEBOUNCE FUNCTION UPDATES THE DATABASE LIVE, WITHOUT SENDING MULTIPLE REQUESTS
FOR EVERY LETTER THAT IS ADDED TO THE TEXT EDITOR.

DATABASE HTTP CALLS every 2-3 secs after typing

more on debounce() ? visit -> https://www.educative.io/edpresso/how-to-use-the-debounce-function-in-javascript
*/

    export default function debounce(a,b,c){
        var d,e;
        return function(){
        function h(){
            d=null;
            c||(e=a.apply(f,g));
        }
        var f=this,g=arguments;
        return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
        }
    }

/*

THIS removeHTMLTags FUNCTION TAKES THE HTML TEXT WHICH IS ACTUALLY CONVERTED FROM STRINGS TO
 HTML TAGS VIA REACT-QUILL(text editing library) changing it to Plane-Text-Preview to user.
*/

    export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
    };