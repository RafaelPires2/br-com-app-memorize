import React from 'react';
import { commonTheme } from '@atomic/obj.theme';
import { BottomTabBarWrapper, TabBarButton, TabBarText } from './bottom-tab-bar-styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

const theme = commonTheme;

export const BottomTabBar = ({ navigation, state, descriptors }: BottomTabBarProps) => {
  return (
    <BottomTabBarWrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const label = options.title ?? route.name;

        return (
          <TabBarButton onPress={onPress} onLongPress={onLongPress} key={index}>
            {options.tabBarIcon?.({
              focused: isFocused,
              color: isFocused ? theme.color.secondaryDark : theme.color.grayMedium,
              size: theme.iconSize.medium,
            })}

            <TabBarText isFocused={isFocused}>
              {!!options.tabBarLabel
                ? typeof options.tabBarLabel === 'string'
                  ? options.tabBarLabel
                  : options.tabBarLabel({
                      children: label,
                      color: isFocused ? theme.color.secondaryDark : theme.color.grayMedium,
                      focused: isFocused,
                      position: 'below-icon',
                    })
                : label}
            </TabBarText>
          </TabBarButton>
        );
      })}
    </BottomTabBarWrapper>
  );
};
