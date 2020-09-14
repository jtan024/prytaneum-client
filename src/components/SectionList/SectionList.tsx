/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListSubheader, 
    Avatar,
    Divider,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface Datum {
    image?: string;
    title: string;
    subtitle: string | JSX.Element | JSX.Element[];
}

export interface Section {
    title: string;
    sectionData: Datum[];
    // dialogData: added for user settings page
    dialogData?: [string, JSX.Element, boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

interface Props {
    sections: Section[];
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    listSection: {
        // backgroundColor: 'inherit',
        marker: 'none',
        backgroundColor: theme.palette.background.paper,
        // margin: `${theme.spacing(2)}px 0px ${theme.spacing(2)}px 0px`,
        // boxShadow: theme.shadows[2],
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
        listStyle: 'none',
    },
}));

/** SectionList returns a list of sections that display the corresponding Congressmembers and their pictures
 *  So you can have one section for a County and then their accompanying Congressmembers
 *  @category Component
 *  @constructor SectionList
 *  @param props
 *  @param {Section[]} props.sections consists of the Sections to iterate through <br><br> A Section consits of Title and a Datum[]
*/
export default function SectionList({ sections }: Props) {
    const classes = useStyles();
    return (
        <List className={classes.root} subheader={<li />}>
            {sections.map(({ title, sectionData }) => (
                <li key={title} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{title}</ListSubheader>
                        <Divider component='li' />
                        {sectionData.map(
                            (
                                { image, title: listItemTitle, subtitle },
                                idx
                            ) => (
                                <span key={idx}>
                                    <ListItem divider>
                                        {image && (
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={image}
                                                    alt='Member of Congress Picture'
                                                />
                                            </ListItemAvatar>
                                        )}
                                        <ListItemText
                                            primary={listItemTitle}
                                            secondary={subtitle}
                                        />
                                    </ListItem>
                                </span>
                            )
                        )}
                    </ul>
                </li>
            ))}
        </List>
    );
}
