/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React, { createContext, useContext, useState } from 'react';
import { connect, Provider as ReduxProvider } from 'react-redux';
import bridge from '../../../bridge';
import sidebarHandlers from '../../../sidebar/containers/sidebarHandlers';
import { propsFromState } from '../../../sidebar/containers/Sidebar';
import configureStore from '../../../sidebar/store/configureStore';
function Consumer({
  children,
  ...props
}) {
  return children({
    onLinkClick: bridge.insertLink,
    onImageEmbed: bridge.embedImage,
    onMediaEmbed: bridge.embedMedia,
    onFileSelect: bridge.insertFileLink,
    ...props
  });
}
export const StoreConsumer = connect(propsFromState, sidebarHandlers)(Consumer);
const StoreContext = /*#__PURE__*/createContext();
export function StoreProvider({
  children,
  ...storeProps
}) {
  const [store] = useState(() => configureStore(storeProps));
  return /*#__PURE__*/React.createElement(ReduxProvider, {
    store: store
  }, /*#__PURE__*/React.createElement(StoreConsumer, null, props => /*#__PURE__*/React.createElement(StoreContext.Provider, {
    value: props
  }, children(props))));
}
export function useStoreProps() {
  const storeProps = useContext(StoreContext);
  if (!storeProps) throw new Error('useStoreProps should be used within a StoreProvider');
  return storeProps;
}