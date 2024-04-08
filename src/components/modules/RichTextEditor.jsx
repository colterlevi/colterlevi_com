import { useEditor, EditorContent } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import { useState, useRef, useCallback } from 'react';
import { useNavigate } from "react-router-dom"
import { FaImage } from 'react-icons/fa';
import Toolbar from './Toolbar';


const RichTextEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit, Image
        ],
        content: `<p>Write something good...</p>`,
    });
    const title = useRef('');
    const tags = useRef('');
    const categories = useRef('');
    const image = useRef('');
    const slug = useRef('');
    const navigate = useNavigate();

    const [selectedValue, setSelectedValue] = useState("draft");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const content = editor.getHTML();
        console.log(content);
    };

    const addImage = useCallback(() => {
        const url = image.current.value;

        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className='card'>
            <div>
                <Toolbar editor={editor} />
                <button onClick={addImage}><FaImage /></button>
            </div>
            <hr />
            <div>
                <input ref={title} type="text" name='title' placeholder='Enter a title...' /><br />
                <div>
                    <label htmlFor="select-status">Publication status:</label>
                    <select id="select-status" value={selectedValue} onChange={handleChange}>
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>
            </div>
            <hr />
            <div>
                <EditorContent editor={editor} />
            </div>
            <hr />
            <div>
                <input ref={categories} placeholder="Enter categories..."></input>
                <input ref={tags} placeholder="Enter tags..."></input>
                <input ref={slug} placeholder="Enter slug..."></input>
                <input ref={image} placeholder="Enter image..."></input>
            </div>

            <div>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
                <button onClick={() => navigate(-1)}>Close</button>
            </div>
        </div>
    );
}

export default RichTextEditor;
