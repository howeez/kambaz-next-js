"use client";

import { ListGroupItem } from "react-bootstrap";

export default function AddBookItem() {
    return (
        <ListGroupItem action onClick={() => alert("New book added")}>
            Add another book
        </ListGroupItem>
    );
}