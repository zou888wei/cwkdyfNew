import {
  /* Container */
  Container,
  Main,
  Aside,
  Header,
  Footer,
  /* Layout */
  Row,
  Col,
  /* UI */
  Button,
  Image,
  Icon,
  Tag,
  Divider,
  /* Form */
  Form,
  FormItem,
  Input,
  InputNumber,
  Autocomplete,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  TimePicker,
  TimeSelect,
  DatePicker,
  Switch,
  Select,
  Option,
  OptionGroup,
  Cascader,
  Progress,
  Transfer,
  Collapse,
  CollapseItem,
  Upload,
  /* Actions */
  Loading,
  Message,
  MessageBox,
  Notification,
  /* Popup */
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Popover,
  Popconfirm,
  Tooltip,
  Dialog,
  /* Data */
  Table,
  TableColumn,
  Pagination,
  /* Tree */
  Tree,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabPane
} from "element-ui"
import CollapseTransition from "element-ui/lib/transitions/collapse-transition"

export default {
  install(Vue) {
    Vue.prototype.$ELEMENT = { size: "medium", zIndex: 6000 }

    Vue.use(Loading.directive)

    Vue.prototype.$loading = Loading.service
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification
    Vue.prototype.$message = Message

    Vue.component(Container.name, Container)
    Vue.component(Main.name, Main)
    Vue.component(Aside.name, Aside)
    Vue.component(Header.name, Header)
    Vue.component(Footer.name, Footer)

    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)

    Vue.component(Image.name, Image)
    Vue.component(Button.name, Button)
    Vue.component(Icon.name, Icon)
    Vue.component(Tag.name, Tag)
    Vue.component(Divider.name, Divider)

    Vue.component(Form.name, Form)
    Vue.component(FormItem.name, FormItem)
    Vue.component(Input.name, Input)
    Vue.component(InputNumber.name, InputNumber)
    Vue.component(Autocomplete.name, Autocomplete)
    Vue.component(Switch.name, Switch)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxButton.name, CheckboxButton)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(TimePicker.name, TimePicker)
    Vue.component(TimeSelect.name, TimeSelect)
    Vue.component(DatePicker.name, DatePicker)
    Vue.component(Select.name, Select)
    Vue.component(Option.name, Option)
    Vue.component(OptionGroup.name, OptionGroup)
    Vue.component(Cascader.name, Cascader)
    Vue.component(Progress.name, Progress)
    Vue.component(Transfer.name, Transfer)
    Vue.component(Collapse.name, Collapse)
    Vue.component(CollapseItem.name, CollapseItem)
    Vue.component(Upload.name, Upload)

    Vue.component(Dropdown.name, Dropdown)
    Vue.component(DropdownMenu.name, DropdownMenu)
    Vue.component(DropdownItem.name, DropdownItem)
    Vue.component(Popover.name, Popover)
    Vue.component(Popconfirm.name, Popconfirm)
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(Dialog.name, Dialog)

    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(Pagination.name, Pagination)

    Vue.component(Tree.name, Tree)
    Vue.component(Menu.name, Menu)
    Vue.component(Submenu.name, Submenu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(MenuItemGroup.name, MenuItemGroup)

    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(BreadcrumbItem.name, BreadcrumbItem)

    Vue.component(Tabs.name, Tabs)
    Vue.component(TabPane.name, TabPane)

    Vue.component(CollapseTransition.name, CollapseTransition)
  }
}
