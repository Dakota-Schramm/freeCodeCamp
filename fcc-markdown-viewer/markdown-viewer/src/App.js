// const tests - window.
import Editor from './components/editor'
import Preview from './components/preview'

import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const defaultString = "# header\n" +
"## subheader\n" +
"[Example Link](Dakota-Schramm.github.io)" +
"\n`inline code`\n" +
"```\n" +
"code block\n" +
"```\n" +
"1. List\n" +
"2. Example\n" +
">blockquote\n" +
"![alt text](image.jpg)\n" +
"**bold text**"

export default function App() {
  const [text, setText] = useState(defaultString);
  return (
    <Container>
      <Row>
        <Col className="lg-12">
          <h1 style={{textAlign: "center"}}>Markdown Viewer</h1>
        </Col>
      </Row>
      <Row>
        <Col className="lg-6">
          <Editor value={text} setValue={setText}/>
        </Col>
        <Col className="lg-6">
          <Preview value={text}/>
        </Col>
      </Row>
    </Container>
  );
}

