import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';
import * as Es from 'blockly/msg/es';
Blockly.setLocale(Es);
const pythonCode = pythonGenerator.workspaceToCode(workspace);

function updateCode(event) {
    const code = pythonGenerator.workspaceToCode(workspace);
    document.getElementById('textarea').value = code;
}
workspace.addChangeListener(updateCode);

Blockly.inject('blocklyDiv', {


});
function BlockDefinition() {
    Blockly.Blocks['string_length'] = {
        init: function () {
            this.appendValueInput('VALUE')
                .setCheck('String')
                .appendField('length of');
            this.setOutput(true, 'Number');
            this.setColour(160);
            this.setTooltip('Returns number of letters in the provided text.');
            this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
        }
    };
}