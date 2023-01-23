import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Divider, Drawer, IconButton, List } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListItem, Logo } from '../';
import { toggleSidebar } from '../../reducer';


type Props = {

    /**
     * Defines is sidebar is open.
     */
    _isShowSidebar: boolean,

    /**
     * Instruction from JSON.
     */
    instruction: Array<Object>,

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function
};

/**
 * Class for main Footer component.
 *
 * @abstract
 */
class Sidebar extends Component<Props> {
    /**
     * Initializes a new {@code Sidebar} instance.
     *
     * @param {Props} props - The read-only React {@code Component} props with
     * which the new instance is to be initialized.
     */
    constructor(props: Props) {
        super(props);

        this._onToggleSidebar = this._onToggleSidebar.bind(this);
    }

    /**
     * Dispatches an action for toggling Sidebar.
     *
     * @returns {void}
     */
    _onToggleSidebar() {
        this.props.dispatch(toggleSidebar());
    }

    /**
     * Implements React's {@link Component#render}.
     *
     * @inheritdoc
     */
    render() {
        const { _isShowSidebar, instruction } = this.props;

        return (
            <div className = { `sidebar${_isShowSidebar ? ' sidebar_open' : ''}` }>
                <Drawer
                    anchor = 'left'
                    open = { _isShowSidebar }
                    transitionDuration = {{ appear: 225,
                        enter: 225,
                        exit: 225 }}
                    variant = 'persistent'>
                    <Box className = 'sidebar__header'>
                        <Logo className = 'sidebar__logo' />
                        <IconButton onClick = { this._onToggleSidebar }>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    <div className = 'sidebar__list'>
                        <List>
                            {Array.isArray(instruction)
                            && instruction.length > 0
                            && instruction.map((item, index) => (
                                <ListItem
                                    content = { item.content }
                                    ids = { [ index ] }
                                    items = { item?.items }
                                    key = { index }
                                    title = { `${index + 1}. ${item?.title}` } />
                            ))}
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

/**
 * Function that maps parts of Redux state tree into component props.
 *
 * @param {Object} state - Redux state.
 * @returns {Object}
 */
function mapStateToProps(state) {
    const { isShowSidebar } = state.layout;

    return {
        _isShowSidebar: isShowSidebar
    };
}

export default connect(mapStateToProps)(Sidebar);
