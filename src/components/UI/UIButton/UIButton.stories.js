import UIButton from "./UIButton";

export default {
    title: 'Ui-Kit/UIButton',
    components: UIButton
}

const Template = (args) => <UIButton {...args} />;

const props = {
    text: "Hello",
    disabled: false
}

export const Primary = Template.bind({});
Primary.args = {
    ...props
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    disabled: true
};