/*
  # Add project image columns to gallery_images table

  1. Changes
    - Add multiple project image columns for gallery functionality
    - These columns will store additional images for each gallery project

  2. New Columns
    - `project_image_1` through `project_image_10` - Additional project images
*/

DO $$
BEGIN
  -- Add project image columns
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_1'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_1 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_2'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_2 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_3'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_3 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_4'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_4 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_5'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_5 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_6'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_6 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_7'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_7 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_8'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_8 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_9'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_9 text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_images' AND column_name = 'project_image_10'
  ) THEN
    ALTER TABLE gallery_images ADD COLUMN project_image_10 text;
  END IF;
END $$;