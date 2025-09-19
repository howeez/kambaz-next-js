export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" defaultValue={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as </label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="ASSIGNMENTS">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type </label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ASSIGNMENTS">Online</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label>Online Entry Options </label><br />

                        <input type="checkbox" name="wd-online-options" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="wd-online-options" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website Url</label><br />

                        <input type="checkbox" name="wd-online-options" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recording</label><br />

                        <input type="checkbox" name="wd-online-options" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="wd-online-options" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <select multiple id="wd-assign-to">
                            <option value="EVERYONE" selected>Everyone</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                        <form>
                            <input type="date" id="wd-due-date"></input>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label htmlFor="wd-available-from">Available From</label>
                        <form>
                            <input type="date" id="wd-available-from"></input>
                        </form>
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Available Until</label>
                        <form>
                            <input type="date" id="wd-available-until"></input>
                        </form>
                    </td>
                </tr>
                {/* Complete on your own */}
            </table>
        </div>
    );
}
