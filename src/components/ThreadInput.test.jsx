/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call submit function when submit button is clicked
 */
import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import ThreadInput from './ThreadInput';

expect.extend(matchers);

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: MemoryRouter });
};

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // arrange
    renderWithRouter(<ThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // action
    await userEvent.type(titleInput, 'titletest');

    // assert
    expect(titleInput).toHaveValue('titletest');
  });

  it('should handle category typing correctly', async () => {
    // arrange
    renderWithRouter(<ThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Category');

    // action
    await userEvent.type(categoryInput, 'categorytest');

    // assert
    expect(categoryInput).toHaveValue('categorytest');
  });

  it('should handle body typing correctly', async () => {
    // arrange
    renderWithRouter(<ThreadInput addThread={() => {}} />);
    const bodyInput = await screen.getByPlaceholderText('Body');

    // action
    await userEvent.type(bodyInput, 'bodytest');

    // assert
    expect(bodyInput).toHaveValue('bodytest');
  });

  it('should call submit function when submit button is clicked', async () => {
    // arrange
    const mockSubmit = vi.fn();
    renderWithRouter(<ThreadInput addThread={mockSubmit} />);
    const titleInput = await screen.getByPlaceholderText('Title');
    await userEvent.type(titleInput, 'titletest');
    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'categorytest');
    const bodyInput = await screen.getByPlaceholderText('Body');
    await userEvent.type(bodyInput, 'bodytest');
    const submitButton = await screen.getByRole('button', {
      name: 'Buat Thread',
    });

    // action
    await userEvent.click(submitButton);

    // assert
    expect(mockSubmit).toBeCalledWith({
      title: 'titletest',
      category: 'categorytest',
      body: 'bodytest',
    });
  });
});
